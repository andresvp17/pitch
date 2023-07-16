import { get, writable } from 'svelte/store'

export const searchedValue = writable('')

export const updateValue = (newSearchedTerm) => {
    return searchedValue.update(() => newSearchedTerm)
}