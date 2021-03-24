import React, { createContext, useContext, useState } from 'react';
import data from '../assets/mock/data';
import {
    actionTypeSelection,
    EventDataObject,
    sortByTypes,
    sortTerm
} from '../types';
import replaceItemAtIndex from '../utils/replaceItemAtIndex';
import { ascendingOrder, descendingOrder } from '../utils/sortBy';

interface EventContextInterface {
    events: EventDataObject[] | null;
    selectedEvent: EventDataObject | null;
}

interface EventActionsContextInterface {
    sortEventBy: (
        sortBy: sortByTypes['sortBy'],
        sortType: 'ascending' | 'descending'
    ) => void;
    setSelectedEvent: (item: EventDataObject | null) => void;
    noActionNeeded: (selectedEvent: EventDataObject | undefined) => void;
    takeAction: (
        selectedEvent: EventDataObject | undefined | null,
        actionValue: actionTypeSelection
    ) => void;
    filterEvent: (searchTerm: string) => void;
}

const EventContext = createContext<EventContextInterface | null>(null);
const EventActionsContext = createContext<EventActionsContextInterface | null>(
    null
);

const EventContextsProvider = ({
    children
}: {
    children: React.ReactNode;
}): JSX.Element => {
    const [events, setEvents] = useState<EventDataObject[]>(data);

    const [selectedEvent, setSelectedEvent] = useState<EventDataObject | null>(
        null
    );

    const sortEventBy = (
        sortBy: sortByTypes['sortBy'],
        sortType: 'ascending' | 'descending'
    ) => {
        if (!events) return;

        const sortedEvents = [
            ...events?.sort((a, b) => {
                const firstItem = a.details
                    .find(({ title }) => title === sortTerm[sortBy])
                    ?.value.toLocaleLowerCase();

                const secondItem = b.details
                    .find(({ title }) => title === sortTerm[sortBy])
                    ?.value.toLocaleLowerCase();

                if (!firstItem || !secondItem) return 0;

                const result =
                    sortType === 'descending'
                        ? descendingOrder(firstItem, secondItem)
                        : ascendingOrder(firstItem, secondItem);

                // eslint-disable-next-line consistent-return
                return result;
            })
        ];

        setEvents(sortedEvents);
    };

    const noActionNeeded = (eventOnAction: EventDataObject | undefined) => {
        if (!eventOnAction || !selectedEvent) return;

        const action = eventOnAction.details[4];
        const newEvent = {
            ...selectedEvent,
            details: replaceItemAtIndex(selectedEvent.details, 4, {
                ...action,
                value: 'No Action Needed'
            })
        };

        const eventIndex = events.findIndex(
            ({ id }) => id === eventOnAction.id
        );

        const newEvents = replaceItemAtIndex(events, eventIndex, newEvent);

        setSelectedEvent(newEvent);

        setEvents(newEvents);
    };

    const takeAction = (
        eventOnAction: EventDataObject | undefined | null,
        actionValue: actionTypeSelection
    ) => {
        if (!eventOnAction || !selectedEvent) return;

        const action = eventOnAction.details[4];
        const newEvent = {
            ...selectedEvent,
            details: replaceItemAtIndex(selectedEvent.details, 4, {
                ...action,
                value: actionValue
            })
        };

        const eventIndex = events.findIndex(
            ({ id }) => id === eventOnAction.id
        );

        const newEvents = replaceItemAtIndex(events, eventIndex, newEvent);

        setSelectedEvent(newEvent);

        setEvents(newEvents);
    };

    const filterEvent = (searchTerm: string): void => {
        const filteredEvents = data.filter(
            (item) =>
                [
                    item.type,
                    item.id,
                    ...item.details.map((detail) => detail.value).flat()
                ]
                    .join(' ')
                    .toLocaleLowerCase()
                    .search(searchTerm) >= 0
        );
        setEvents(filteredEvents);
    };

    const actions = {
        sortEventBy,
        setSelectedEvent,
        noActionNeeded,
        takeAction,
        filterEvent
    };

    return (
        <EventActionsContext.Provider value={actions}>
            <EventContext.Provider value={{ events, selectedEvent }}>
                {children}
            </EventContext.Provider>
        </EventActionsContext.Provider>
    );
};

export default EventContextsProvider;

export const useEvents = (): EventContextInterface | null =>
    useContext(EventContext);
export const useActions = (): EventActionsContextInterface | null =>
    useContext(EventActionsContext);
