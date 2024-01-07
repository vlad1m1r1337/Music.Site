import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set_is_playing } from '../store';

const useAudioControls = ({ audioRef }) => {
    const isPlaying = useSelector(state => state.is_playing);
    const dispatch = useDispatch();

    const handleStart = () => {
        audioRef.current.play();
        dispatch(set_is_playing({ bool: true }));
    };

    const handleStop = () => {
        audioRef.current.pause();
        dispatch(set_is_playing({ bool: false }));
    };

    useEffect(() => {
        const handleStart = () => {
            audioRef.current.play();
            dispatch(set_is_playing({ bool: true }));
        };

        const audio = document.getElementById('audioId');
        audio.addEventListener('play', function() {
            dispatch(set_is_playing({ bool: true }));
        });

        return () => {
            audio.removeEventListener('play', handleStart);
        };
    }, [dispatch, audioRef]);

    const togglePlay = isPlaying ? handleStop : handleStart;

    return { isPlaying, togglePlay };
};

export default useAudioControls;
