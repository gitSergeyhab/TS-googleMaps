export interface Mappable {
    location: {
        lat: number,
        lng: number,
    },
    color: string;
    // name: string,
    markerContent(): string;
}

export class CustomMap {
    // private googleMap = google.maps.Map;
    private googleMap = new google.maps.Map(document.querySelector('div'), {});

    constructor(mapSelector:string) {
        this.googleMap = new google.maps.Map(document.querySelector(mapSelector), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            }
        });
    }

    addMarker(markerObj: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: markerObj.location.lat,
                lng: markerObj.location.lng,
            }
        });

        //при клике создается окно
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: `<div>
                            ${markerObj.markerContent()}
                            <p>Some Text</p>
                        </div>`
            });
            infoWindow.open(this.googleMap, marker);
        })


    }
}