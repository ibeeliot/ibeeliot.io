# Portfolio 

This is eliot's portfolio github


### Feel free to use 
- Fork
- Clone

### Original Instructions

```

## Props

- `initialSlide` defaults to `0`
- `duration` - scroll duration [ms] defaults to `700`
- `controls` defaults to `false`
  - `true` adds built-in controls
  - Pass React component if you want to use your own controls
- `controlsProps` additional props for controls component
- `beforeChange` callback executed before scroll
- `afterChange` callback executed after scroll
- `scrollMode` `full-page` or `normal` - defaults to `full-page`

Both `beforeChange` and `afterChange` will receive as parameter an object like:

```js
{
  "from": 0, // the index of the slide react-full-page is scrolling _from_
  "to": 1, // the index of the slide react-full-page is scrolling _to_
}
```

## Slider Controls
