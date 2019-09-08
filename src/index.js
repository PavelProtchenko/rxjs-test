import {fromEvent} from 'rxjs'
import {map, debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators'
import {ajax} from 'rxjs/ajax'

const url = 'https://api.github.com/search/users?q='

const search = document.getElementById('search')

const stream$ = fromEvent(search, 'input')
  .pipe(
    map(e => e.target.value),
    debounceTime(1000),
    distinctUntilChanged(),
    switchMap(v => ajax.getJSON(url + v))
  )

stream$.subscribe(value => {
  console.log(value)
})
