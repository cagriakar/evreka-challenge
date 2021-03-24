import React, { useEffect } from 'react';
import { TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { EventDataObject } from '../../types';

const InnerMap = ({
    position,
    selectedEvent
}: {
    position: LatLngExpression;
    selectedEvent: EventDataObject;
}): JSX.Element => {
    const map = useMap();

    useEffect(() => {
        map.flyTo(position);
    }, [map, position]);

    return (
        <>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>{selectedEvent.details[1].value}</Popup>
            </Marker>
        </>
    );
};

export default InnerMap;
