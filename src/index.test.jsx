import {fetchMainTracks, fetchFavorite, login, Reducer} from './store/idSlice';
import {mockMaintracks} from "./services/constants";

global.fetch = jest.fn();
describe('fetchMainTracks', () => {
    it('should fetchMainTracks with resolved response', async () => {
        fetch.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockMaintracks),
        });
        const dispatch = jest.fn();
        const thunk = fetchMainTracks();

        await thunk(dispatch);
        const {calls} = dispatch.mock;
        expect(calls.length).toBe(2);

        const [start, end] = calls;

        expect(start[0].type).toBe('main/fetchTracks/pending');
        expect(end[0].type).toBe('main/fetchTracks/fulfilled');
        expect(end[0].payload).toBe(mockMaintracks);
    })
    it("should fetchMainTracks with rejected response", async () => {
        fetch.mockResolvedValueOnce({
            ok: false,
            json: () => Promise.resolve(mockMaintracks),
        });
        const dispatch = jest.fn();
        const thunk = fetchMainTracks();

        await thunk(dispatch);
        const {calls} = dispatch.mock;
        expect(calls.length).toBe(2);

        const [start, end] = calls;
        expect(start[0].type).toBe('main/fetchTracks/pending');
        expect(end[0].type).toBe(fetchMainTracks.rejected().type);
        expect(end[0].meta.rejectedWithValue).toBe(true);
    })
});

const initialState = {
    loading: true,
};

describe('idSlice', () => {
    it ('should change status with fetchMainTracks.fulfilled action', () => {
        const state = Reducer(initialState, fetchMainTracks.fulfilled(mockMaintracks));
        expect(state).toEqual({
            tracks_page: mockMaintracks,
            loading: false,
        })
        expect(state.loading).toBe(false);
    });
    it ('should change status with login.rejected action', () => {
        const initialState = {
            loading: true,
            auth_error: [false, null],
        };
        const state = Reducer(initialState, login.rejected());
        expect(state.loading).toBe(false);
    });
    it ('should change status with login.rejected action', () => {
        const initialState = {
            loading: true,
            auth_error: [false, null],
        };
        const state = Reducer(initialState, login.rejected());
        expect(state.loading).toBe(false);
        expect(state.auth_error[0]).toBe(true);
    });
});