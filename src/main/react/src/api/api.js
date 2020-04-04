export const get_transactions = async () => {
  try {
    const response = await fetch('/bookmate/v1/get-transactions', {
      credentials: 'include',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })

    const data = await response.json()
    return data
  } catch (err) {
    return err
  }
}

export const get_listings = async () => {
  try {
    const response = await fetch('/bookmate/v1/get-listings', {
      credentials: 'include',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })

    const data = await response.json()
    return data
  } catch (err) {
    return err
  }
}

export const list_book_for_purchase = async (
  isbn,
  author,
  title,
  genre,
  desc,
  price
) => {
  try {
    const response = await fetch('/bookmate/v1/list-book-for-purchase', {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isbn: isbn,
        author: author,
        title: title,
        genre: genre,
        desc: desc,
        price: price,
      }),
    })

    const data = response.ok
    return data
  } catch (err) {
    return err
  }
}

export const list_book_for_trade = async (isbn, author, title, genre, desc) => {
  try {
    const response = await fetch('/bookmate/v1/list-book-for-trade', {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isbn: isbn,
        author: author,
        title: title,
        genre: genre,
        desc: desc,
      }),
    })
    const data = response.ok
    return data
  } catch (err) {
    return err
  }
}

export const list_book_for_auction = async (
  isbn,
  author,
  title,
  genre,
  desc,
  auction_end_date
) => {
  try {
    const response = await fetch('/bookmate/v1/list-book-for-auction', {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isbn: isbn,
        author: author,
        title: title,
        genre: genre,
        desc: desc,
        auction_end_date: auction_end_date,
      }),
    })
    const data = response.ok
    return data
  } catch (err) {
    return err
  }
}

export const register = async (email, password, first_name, last_name) => {
  try {
    const response = await fetch('/bookmate/v1/create-account', {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        first_name: first_name,
        last_name: last_name,
      }),
    })

    const data = await response.json()
    return data
  } catch (err) {
    return err
  }
}

export const remove_auction = async (auction_id) => {
  try {
    const response = await fetch(
      '/bookmate/v1/remove-auction?auctionId=' + auction_id,
      {
        credentials: 'include',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }
    )
    const data = response.ok
    return data
  } catch (err) {
    return err
  }
}

export const remove_purchase = async (purchase_id) => {
  try {
    const response = await fetch(
      '/bookmate/v1/remove-purchase?purchaseId=' + purchase_id,
      {
        credentials: 'include',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }
    )
    const data = response.ok
    return data
  } catch (err) {
    return err
  }
}

export const remove_trade = async (trade_id) => {
  try {
    const response = await fetch(
      '/bookmate/v1/remove-trade?tradeId=' + trade_id,
      {
        credentials: 'include',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }
    )
    const data = response.ok
    return data
  } catch (err) {
    return err
  }
}

export const make_bid = async (auction_id, amount) => {
  try {
    const response = await fetch('/bookmate/v1/bid', {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        auction_id: auction_id,
        amount: amount,
      }),
    })
    const data = response.ok
    return data
  } catch (err) {
    return err
  }
}

export const login = async (email) => {
  try {
    const response = await fetch('/bookmate/v1/login?email=' + email, {
      credentials: 'include',
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    const data = await response.json()
    return data
  } catch (err) {
    return err
  }
}

export const purchase_book = async (purchase_id) => {
  try {
    const response = await fetch(
      '/bookmate/v1/purchase-book?purchaseId=' + purchase_id,
      {
        credentials: 'include',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }
    )
    const data = response.ok
    return data
  } catch (err) {
    return err
  }
}

export const trade_book = async (trade_id) => {
  try {
    const response = await fetch(
      '/bookmate/v1/trade_book?tradeId=' + trade_id,
      {
        credentials: 'inclue',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }
    )
    const data = response.ok
    return data
  } catch (err) {
    return err
  }
}
