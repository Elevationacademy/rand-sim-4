import 'dotenv/config'
import createHttpService from './http.service'

class ColorsApiService {
    constructor() {
        this.httpService = createHttpService( process.env.COLORS_API_URL )
    }

    static mapColorsResponseToJson( colorsResponse ) {
        return {
            name: colorsResponse.name.value,
            hex: colorsResponse.hex.clean,
            rgb: {
                r: colorsResponse.rgb.r,
                g: colorsResponse.rgb.g,
                b: colorsResponse.rgb.b
            }
        }
    }

    async fetchColorInfo( color ) {
        try {
            const response = await this.httpService.get( 'id?hex=' + color )

            return ColorsApiService.mapColorsResponseToJson( response.data )
        } catch ( error ) {
            if ( error.code === 'ENOTFOUND' ) {
                console.error( 'Can not access host', error.hostname )
            }

            throw error
        }
    }
}

export default ColorsApiService
