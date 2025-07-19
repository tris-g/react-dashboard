import { SkeletonTheme } from 'react-loading-skeleton';
import { useEffect, useState } from 'react';
import { useTheme } from './ThemeContext';

export const ThemedSkeleton = ({ children }) => {
    const { theme } = useTheme();
    const [colors, setColors] = useState({
        baseColor: '#ebebeb',
        highlightColor: '#f5f5f5',
    });
    
    useEffect(() => {
        // Wait for the changes to apply before fetching
        const timeout = setTimeout(() => {
            const root = document.documentElement;
            setColors({
                baseColor: getComputedStyle(root).getPropertyValue('--skeleton-base').trim() || '#ebebeb',
                highlightColor: getComputedStyle(root).getPropertyValue('--skeleton-highlight').trim() || '#f5f5f5',
            });
        }, 0);

        return () => clearTimeout(timeout);
    }, [theme]);

    return (
    <SkeletonTheme baseColor={colors.baseColor} highlightColor={colors.highlightColor}>
        <div key={theme}>{children}</div>
    </SkeletonTheme>
    );
};

export default ThemedSkeleton;
