const dummy = () => {
  // ...
  return 1
}

const totalLikes = (blogs) => {
  return blogs.length === 0
    ? 0
    : blogs.reduce((sum, item) => sum + item.likes, 0)
}

const favoriteBlogVanilla = (blogs) => {
  if (blogs.length === 0) return {}

  let max = { likes: 0 }
  for (let i = 0; i < blogs.length; i++) {
    if (max.likes < blogs[i].likes) {
      max = blogs[i]
    }
  }

  return max
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return {}

  return blogs.reduce((prev, current) => {
    return (prev.likes > current.likes) ? prev : current
  })
}


function mostBlogs(blogs) {

  if (blogs.length === 0) return { author: '', blogs: 0 }
  if (blogs.length === 1) return { author: blogs[0].author, blogs: 1 }


  const acumulator = {}
  const max = { author: '', blogs: 0 }
  for (let i = 0; i < blogs.length; i++) {
    let actual = blogs[i]

    acumulator[actual.author] = (acumulator[actual.author] === undefined)
      ? 1
      : acumulator[actual.author] + 1

    if (acumulator[actual.author] > max.blogs) {
      max.blogs = acumulator[actual.author]
      max.author = actual.author
    }
  }

  return max
}

function mostLikes(blogs) {

  if (blogs.length === 0) return { author: '', likes: 0 }
  if (blogs.length === 1) return { author: blogs[0].author, likes: blogs[0].likes }

  const max = { author: '', likes: 0 }

  const acumulator = {}
  for (let i = 0; i < blogs.length; i++) {
    let actual = blogs[i]

    acumulator[actual.author] = (acumulator[actual.author] === undefined)
      ? actual.likes
      : acumulator[actual.author] + actual.likes

    if (acumulator[actual.author] > max.likes) {
      max.likes = acumulator[actual.author]
      max.author = actual.author
    }
  }

  return max


}


module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  favoriteBlogVanilla,
  mostBlogs,
  mostLikes
}