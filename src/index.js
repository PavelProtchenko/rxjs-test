import {fromEvent} from 'rxjs'
import {map} from 'rxjs/operators'

const url = 'https://api.github.com/search/users/q='

const search = document.getElementById('search')

const stream$ = fromEvent(search, 'input')
  .pipe(
    map(e => e.target.value)
  )

stream$.subscribe(value => {
  console.log(value)
})
