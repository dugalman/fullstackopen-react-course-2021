const listHelper = require('../utils/list_helper')
const { listOfBlogs, listWithOneBlog } = require('./test_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})


describe('total likes', () => {

  test('of empty list is zero', () => {
    expect(listHelper.totalLikes([])).toBe(0)
  })

  test('when list has only one blog equals the likes of that', () => {
    expect(listHelper.totalLikes(listWithOneBlog)).toBe(5)
  })

  test('of a bigger list is calculated right', () => {
    expect(listHelper.totalLikes(listOfBlogs)).toBe(36)
  })
})


describe('favorite Blogs', () => {
  test('of empty list is zero', () => {
    expect(listHelper.favoriteBlog([])).toEqual({})
  })

  test('when list has only one blog equals the likes of that', () => {
    expect(listHelper.favoriteBlog(listWithOneBlog)).toEqual(listWithOneBlog[0])
  })

  test('of a bigger list is calculated right', () => {
    // console.log(listOfBlogs[2])
    expect(listHelper.favoriteBlog(listOfBlogs)).toEqual(listOfBlogs[2])
  })
})

describe('favorite Blogs Vanilla JS', () => {
  test('of empty list is zero', () => {
    expect(listHelper.favoriteBlogVanilla([])).toEqual({})
  })

  test('when list has only one blog equals the likes of that', () => {
    expect(listHelper.favoriteBlogVanilla(listWithOneBlog)).toEqual(listWithOneBlog[0])
  })

  test('of a bigger list is calculated right', () => {
    // console.log(listOfBlogs[2])
    expect(listHelper.favoriteBlogVanilla(listOfBlogs)).toEqual(listOfBlogs[2])
  })
})


describe('most Blogs', () => {
  test('of empty list is zero', () => {
    expect(listHelper.mostBlogs([])).toEqual({ 'author': '', 'blogs': 0 })
  })

  test('when list has only one blog equals the likes of that', () => {
    const rta = listHelper.mostBlogs(listWithOneBlog)

    expect(rta.author).toBe('Edsger W. Dijkstra')
    expect(rta.blogs).toBe(1)

    expect(rta).toEqual({ 'author': listWithOneBlog[0].author, 'blogs': 1 })
  })

  test('of a bigger list is calculated right', () => {
    const rta = listHelper.mostBlogs(listOfBlogs)

    expect(rta.blogs).toBe(3)
    expect(rta.author).toBe('Robert C. Martin')
  })

})

describe('mostLikes', () => {
  test('of empty list is zero', () => {
    expect(listHelper.mostLikes([])).toEqual({ 'author': '', 'likes': 0 })
  })

  test('when list has only one blog equals the likes of that', () => {
    const rta = listHelper.mostLikes(listWithOneBlog)

    expect(rta).toEqual({ 'author': 'Edsger W. Dijkstra', 'likes': 5 })
  })

  test('of a bigger list is calculated right', () => {
    const rta = listHelper.mostLikes(listOfBlogs)

    expect(rta).toEqual({ 'author': 'Edsger W. Dijkstra', 'likes': 17 })
  })

})

