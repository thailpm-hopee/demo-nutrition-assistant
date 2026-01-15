import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Version1 from './pages/Version1';
import Version2 from './pages/Version2';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Version1 />} />
                <Route path="/v1" element={<Version1 />} />
                <Route path="/v2" element={<Version2 />} />
                {/* Fallback to home */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Layout>
    );
}

export default App;
