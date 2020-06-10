import React from 'react';

export const LoggedInContext = React.createContext(false);
export const LoggedInUserContext = React.createContext({});
export const AppNameContext = React.createContext('MyApp');
export const ClassesContext = React.createContext([]);
export const RacesContext = React.createContext([]);
export const MergedContext = React.createContext({});
export const MenuContext = React.createContext('');