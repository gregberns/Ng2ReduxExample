import { ACTIONS } from '../actions/'

export interface IAppState {
  total: number;
}

export const INIT_STATE: IAppState = {
  total: 0
};

export function rootReducer(state = INIT_STATE, action) {

	switch (action.type) {
		case ACTIONS.INCREMENT:
			console.log('reduce increment')
			console.log(state)
			var s = Object.assign({}, state, {total: state.total + 1})
			console.log(s)
			return s

		default:
			return state;
	}

}
