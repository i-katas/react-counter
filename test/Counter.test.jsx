import Counter from 'Counter'

describe('Counter', () => {
  let count = 0

  function render(n) {
    count = n
  }

  beforeEach(render.bind(0, 0))

  it('start values', () => {
    let counter = shallow(<Counter render={render}/>)

    expect(counter.state("count")).toEqual(0)
    expect(count).toBe(0)
  })

  it('increment', () => {
    let counter = shallow(<Counter render={render}/>)
    
    counter.find('button').simulate('click')
    expect(count).toBe(1)

    counter.find('button').simulate('click')
    expect(count).toBe(2)
  })

  it('render silently if render property missing', () => render(<Counter/>))

})
