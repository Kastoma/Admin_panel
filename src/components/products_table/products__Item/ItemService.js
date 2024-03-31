import axios from 'axios';

export class ItemService {
    static async getAll() {
        try {
            const resp = await axios.get('https://api.npoint.io/795b62b1c9087ebd5beb')
            return resp.data
        } catch (e) {
            console.log(e)
        }
    }
}