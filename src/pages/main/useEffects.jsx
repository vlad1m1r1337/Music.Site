import {useEffect} from "react";
import {set_rerender} from "../../store/rerender";
import {
    fetchMainTracks,
    getFavorite,
    set_amount_id_tracks,
    set_def_shuffle_arr,
    setIsLoading,
    create_filter_obj,
} from "../../store/idSlice";
import {useDispatch, useSelector} from "react-redux";

export const useEffects =  (isLoading) => {
    const dispatch = useDispatch();
    const tracks = useSelector(state => state.main.tracks);
    const amount_id_tracks = useSelector(state => state.main.amount_id_tracks);
    const accessToken = useSelector(state => state.main.access);
    const rerender = useSelector(state => state.rerender.rerender);
    const id = useSelector(state => state.main.id);
    const tracks_page = useSelector(state => state.main.tracks_page);
    const filter_obj = useSelector(state => state.main.filter_obj);

    useEffect(() => {
        if (id !== -1 && rerender) {
            dispatch(set_rerender({rerender: false}));
            return ;
        }
        dispatch(setIsLoading({loading: true}));
    }, []);

    useEffect(() => {
        dispatch(fetchMainTracks());
        dispatch(getFavorite({accessToken}));
    }, [dispatch, accessToken]);

    useEffect(() => {
        if (!isLoading) {
            if (amount_id_tracks !== -1) return ;
            dispatch(set_amount_id_tracks({tracks: tracks}));
            dispatch(set_def_shuffle_arr());
        }
    }, [isLoading, dispatch, tracks, amount_id_tracks]);

    useEffect(() => {
        dispatch(create_filter_obj());
    }, [tracks_page]);
}