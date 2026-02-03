// Analytics tracking utilities
import { db } from './firebase';
import { collection, addDoc, getDocs, deleteDoc, query, orderBy, Timestamp, doc, setDoc, getDoc } from 'firebase/firestore';

// Track page view
export const trackPageView = async (page = 'home') => {
    try {
        await addDoc(collection(db, 'pageViews'), {
            page,
            timestamp: Timestamp.now(),
            userAgent: navigator.userAgent,
            referrer: document.referrer || 'direct'
        });

        // Also update daily counter
        const today = new Date().toISOString().split('T')[0];
        const counterRef = doc(db, 'analytics', today);
        const counterDoc = await getDoc(counterRef);

        if (counterDoc.exists()) {
            await setDoc(counterRef, { views: (counterDoc.data().views || 0) + 1 }, { merge: true });
        } else {
            await setDoc(counterRef, { views: 1, downloads: 0, date: today });
        }
    } catch (error) {
        console.error('Error tracking page view:', error);
    }
};

// Track resume download
export const trackResumeDownload = async () => {
    try {
        await addDoc(collection(db, 'resumeDownloads'), {
            timestamp: Timestamp.now(),
            userAgent: navigator.userAgent
        });

        // Update daily counter
        const today = new Date().toISOString().split('T')[0];
        const counterRef = doc(db, 'analytics', today);
        const counterDoc = await getDoc(counterRef);

        if (counterDoc.exists()) {
            await setDoc(counterRef, { downloads: (counterDoc.data().downloads || 0) + 1 }, { merge: true });
        } else {
            await setDoc(counterRef, { views: 0, downloads: 1, date: today });
        }
    } catch (error) {
        console.error('Error tracking resume download:', error);
    }
};

// Submit contact message
export const submitContactMessage = async (name, email, message) => {
    try {
        await addDoc(collection(db, 'messages'), {
            name,
            email,
            message,
            timestamp: Timestamp.now(),
            read: false
        });
        return { success: true };
    } catch (error) {
        console.error('Error submitting message:', error);
        return { success: false, error: error.message };
    }
};

// Get analytics data (for admin)
export const getAnalytics = async () => {
    try {
        // Get total page views
        const viewsSnap = await getDocs(collection(db, 'pageViews'));
        const totalViews = viewsSnap.size;

        // Get total downloads
        const downloadsSnap = await getDocs(collection(db, 'resumeDownloads'));
        const totalDownloads = downloadsSnap.size;

        // Get messages
        const messagesQuery = query(collection(db, 'messages'), orderBy('timestamp', 'desc'));
        const messagesSnap = await getDocs(messagesQuery);
        const messages = messagesSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // Get daily analytics for chart
        const analyticsQuery = query(collection(db, 'analytics'), orderBy('date', 'desc'));
        const analyticsSnap = await getDocs(analyticsQuery);
        const dailyData = analyticsSnap.docs.map(doc => doc.data()).slice(0, 7).reverse();

        return {
            totalViews,
            totalDownloads,
            messages,
            dailyData,
            unreadMessages: messages.filter(m => !m.read).length
        };
    } catch (error) {
        console.error('Error getting analytics:', error);
        return { totalViews: 0, totalDownloads: 0, messages: [], dailyData: [], unreadMessages: 0 };
    }
};

// Delete a message (for admin)
export const deleteMessage = async (messageId) => {
    try {
        await deleteDoc(doc(db, 'messages', messageId));
        return { success: true };
    } catch (error) {
        console.error('Error deleting message:', error);
        return { success: false, error: error.message };
    }
};
