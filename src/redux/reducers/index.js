import authReducer from './auth';
import fostersReducer from './fosters';
import rescueReducer from './rescue';
import profileReducer from './profile';

const Reducers = {
    auth: authReducer,
    fosters: fostersReducer,
    rescue: rescueReducer,
    profile: profileReducer,
};

export default Reducers;

export * from './auth';
export * from './fosters';
export * from './profile';
export * from './rescue';
