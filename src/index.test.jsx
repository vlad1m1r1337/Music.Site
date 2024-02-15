import {fetchMainTracks} from './store/idSlice';

global.fetch = jest.fn();
describe('fetchMainTracks', () => {
    it('should fetchMainTracks with resolved response', async () => {
        const mockMaintracks = [
            {
                album: "Workout",
                author: "Winniethemoog",
                duration_in_seconds: 234,
                genre: "Рок музыка",
                id: 36,
                logo: null,
                name: "Action Sport Breakbeat",
                release_date: "1991-09-07",
                track_file: "https://skypro-music-api.skyeng.tech/media/music_files/Winniethemoog_-_Action_Sport_Breakbeat.mp3",
            }
        ]
        fetch.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockMaintracks),
        });
        const dispatch = jest.fn();
        const thunk = fetchMainTracks();

        await thunk(dispatch, () => ({}));
        const {calls} = dispatch.mock;
        expect(calls.length).toBe(2);

        const [start, end] = calls;

        expect(start[0].type).toBe('main/fetchTracks/pending');
        expect(end[0].type).toBe('main/fetchTracks/fulfilled');
        console.log(end[0].payload);
    })
});