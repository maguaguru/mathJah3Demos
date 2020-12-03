import { all, takeLatest } from 'redux-saga/effects'
import { getResourceById } from './resources'
import { ResourcesActions } from '../reducers'

export default function * root () {
    yield all([
        takeLatest(ResourcesActions.getResourceById, getResourceById)
    ])
}