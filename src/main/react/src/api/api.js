/* global token */

export const get_transactions = async is_demo => {
  if (is_demo) {
    return {
      transactions: [{
        purchases: [{
          lister: {
            first_name: "Mikey",
            last_name: "Crosthwaite",
            username: "mcrosthwaite",
            email: "mcrosthwaite@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Biology",
            title: "Anatomy of the Human Body",
            author: "Helena Orteau",
            ISBN: "356-1-67-257326-3",
            desc: "Integer enim neque volutpat ac tincidunt vitae semper."
          },
          price: "65.00"
        },
        {
          lister: {
            first_name: "Julian",
            last_name: "Hanscome",
            username: "jhanscome",
            email: "jhanscome@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Math",
            title: "Fundamentals of Calculus",
            author: "Pearson",
            ISBN: "978-2-45-123345-1",
            desc: ""
          },
          price: "50.00",
        },
        {
          lister: {
            first_name: "Annmaria",
            last_name: "Gullyes",
            username: "agullyes",
            email: "agullyes@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Literature",
            title: "American Literature in the 1900s",
            author: "Merle Schrinel",
            ISBN: "324-1-45-236257-2",
            desc: ""
          },
          price: "25.00"
        },
        {
          lister: {
            first_name: "Andromache",
            last_name: "Hallet",
            username: "ahallet",
            email: "ahallet@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Drama",
            title: "Drama in the 1980s",
            author: "Eduardo Thomsen",
            ISBN: "264-2-76-185729-4",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          },
          price: "35.00"
        },
        {
          lister: {
            first_name: "Ramsey",
            last_name: "Witz",
            username: "rwitz",
            email: "rwitz@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Math",
            title: "Fundamentals of Calculus",
            author: "Pearson",
            ISBN: "978-2-45-123345-1",
            desc: "Lacus sed turpis tincidunt id aliquet risus."
          },
          price: "20.00"
        }],
      },
      {
        trades: [{
          lister: {
            first_name: "Andromache",
            last_name: "Hallet",
            username: "ahallet",
            email: "ahallet@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Drama",
            title: "Drama in the 1980s",
            author: "Eduardo Thomsen",
            ISBN: "264-2-76-185729-4",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          },
          price: ""
        },
        {
          lister: {
            first_name: "Ramsey",
            last_name: "Witz",
            username: "rwitz",
            email: "rwitz@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Math",
            title: "Fundamentals of Calculus",
            author: "Pearson",
            ISBN: "978-2-45-123345-1",
            desc: "Lacus sed turpis tincidunt id aliquet risus."
          },
          price: ""
        },
        {
          lister: {
            first_name: "Julian",
            last_name: "Hanscome",
            username: "jhanscome",
            email: "jhanscome@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Math",
            title: "Fundamentals of Calculus",
            author: "Pearson",
            ISBN: "978-2-45-123345-1",
            desc: ""
          },
          price: "",
        },
        {
          lister: {
            first_name: "Annmaria",
            last_name: "Gullyes",
            username: "agullyes",
            email: "agullyes@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Literature",
            title: "American Literature in the 1900s",
            author: "Merle Schrinel",
            ISBN: "324-1-45-236257-2",
            desc: ""
          },
          price: ""
        },
        {
          lister: {
            first_name: "Andromache",
            last_name: "Hallet",
            username: "ahallet",
            email: "ahallet@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Drama",
            title: "Drama in the 1980s",
            author: "Eduardo Thomsen",
            ISBN: "264-2-76-185729-4",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          },
          price: ""
        },
        {
          lister: {
            first_name: "Ramsey",
            last_name: "Witz",
            username: "rwitz",
            email: "rwitz@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Math",
            title: "Fundamentals of Calculus",
            author: "Pearson",
            ISBN: "978-2-45-123345-1",
            desc: "Lacus sed turpis tincidunt id aliquet risus."
          },
          price: ""
        },
        {
          lister: {
            first_name: "Bertha",
            last_name: "Pudsey",
            username: "bpudsey",
            email: "bpudsey@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Art",
            title: "Modern Realism",
            author: "Franny Bartoshevich",
            ISBN: "515-2-56-125678-3",
            desc: ""
          },
          price: ""
        },
        {
          lister: {
            first_name: "Mikey",
            last_name: "Crosthwaite",
            username: "mcrosthwaite",
            email: "mcrosthwaite@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Biology",
            title: "Anatomy of the Human Body",
            author: "Helena Orteau",
            ISBN: "356-1-67-257326-3",
            desc: "Integer enim neque volutpat ac tincidunt vitae semper."
          },
          price: ""
        },
        {
          lister: {
            first_name: "Julian",
            last_name: "Hanscome",
            username: "jhanscome",
            email: "jhanscome@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Math",
            title: "Fundamentals of Calculus",
            author: "Pearson",
            ISBN: "978-2-45-123345-1",
            desc: ""
          },
          price: "",
        },
        {
          lister: {
            first_name: "Annmaria",
            last_name: "Gullyes",
            username: "agullyes",
            email: "agullyes@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Literature",
            title: "American Literature in the 1900s",
            author: "Merle Schrinel",
            ISBN: "324-1-45-236257-2",
            desc: ""
          },
          price: ""
        },
        {
          lister: {
            first_name: "Andromache",
            last_name: "Hallet",
            username: "ahallet",
            email: "ahallet@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Drama",
            title: "Drama in the 1980s",
            author: "Eduardo Thomsen",
            ISBN: "264-2-76-185729-4",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          },
          price: ""
        },
        {
          lister: {
            first_name: "Ramsey",
            last_name: "Witz",
            username: "rwitz",
            email: "rwitz@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Math",
            title: "Fundamentals of Calculus",
            author: "Pearson",
            ISBN: "978-2-45-123345-1",
            desc: "Lacus sed turpis tincidunt id aliquet risus."
          },
          price: ""
        }],
      },
      {
        auctions: [{
          lister: {
            first_name: "Julian",
            last_name: "Hanscome",
            username: "jhanscome",
            email: "jhanscome@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Math",
            title: "Fundamentals of Calculus",
            author: "Pearson",
            ISBN: "978-2-45-123345-1",
            desc: ""
          },
          price: "50.00",
        },
        {
          lister: {
            first_name: "Annmaria",
            last_name: "Gullyes",
            username: "agullyes",
            email: "agullyes@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Literature",
            title: "American Literature in the 1900s",
            author: "Merle Schrinel",
            ISBN: "324-1-45-236257-2",
            desc: ""
          },
          price: "25.00"
        },
        {
          lister: {
            first_name: "Andromache",
            last_name: "Hallet",
            username: "ahallet",
            email: "ahallet@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Drama",
            title: "Drama in the 1980s",
            author: "Eduardo Thomsen",
            ISBN: "264-2-76-185729-4",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          },
          price: "35.00"
        },
        {
          lister: {
            first_name: "Mikey",
            last_name: "Crosthwaite",
            username: "mcrosthwaite",
            email: "mcrosthwaite@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Biology",
            title: "Anatomy of the Human Body",
            author: "Helena Orteau",
            ISBN: "356-1-67-257326-3",
            desc: "Integer enim neque volutpat ac tincidunt vitae semper."
          },
          price: "65.00"
        },
        {
          lister: {
            first_name: "Julian",
            last_name: "Hanscome",
            username: "jhanscome",
            email: "jhanscome@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Math",
            title: "Fundamentals of Calculus",
            author: "Pearson",
            ISBN: "978-2-45-123345-1",
            desc: ""
          },
          price: "50.00",
        },
        {
          lister: {
            first_name: "Annmaria",
            last_name: "Gullyes",
            username: "agullyes",
            email: "agullyes@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Literature",
            title: "American Literature in the 1900s",
            author: "Merle Schrinel",
            ISBN: "324-1-45-236257-2",
            desc: ""
          },
          price: "25.00"
        },
        {
          lister: {
            first_name: "Andromache",
            last_name: "Hallet",
            username: "ahallet",
            email: "ahallet@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Drama",
            title: "Drama in the 1980s",
            author: "Eduardo Thomsen",
            ISBN: "264-2-76-185729-4",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          },
          price: "35.00"
        },
        {
          lister: {
            first_name: "Ramsey",
            last_name: "Witz",
            username: "rwitz",
            email: "rwitz@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Math",
            title: "Fundamentals of Calculus",
            author: "Pearson",
            ISBN: "978-2-45-123345-1",
            desc: "Lacus sed turpis tincidunt id aliquet risus."
          },
          price: "20.00"
        }],
      }]
    }
  }

  try {
    const response = await fetch(
      '/bookmate/v1/get-transactions', {
        credentials: 'include',
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token
        }
      }
    )

    const data = await response.json()
    return data
  } catch (err) {
    return err
  }
}

export const get_listings = async is_demo => {
  if(is_demo) {
    return {
      transactions: [{
        purchases: [{
          lister: {
            first_name: "Mikey",
            last_name: "Crosthwaite",
            username: "mcrosthwaite",
            email: "mcrosthwaite@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Biology",
            title: "Anatomy of the Human Body",
            author: "Helena Orteau",
            ISBN: "356-1-67-257326-3",
            desc: "Integer enim neque volutpat ac tincidunt vitae semper."
          },
          price: "65.00"
        }],
      },
      {
        trades: [{
          lister: {
            first_name: "Ramsey",
            last_name: "Witz",
            username: "rwitz",
            email: "rwitz@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Math",
            title: "Fundamentals of Calculus",
            author: "Pearson",
            ISBN: "978-2-45-123345-1",
            desc: "Lacus sed turpis tincidunt id aliquet risus."
          },
          price: "20.00"
        },
        {
          lister: {
            first_name: "Julian",
            last_name: "Hanscome",
            username: "jhanscome",
            email: "jhanscome@oakland.edu"
          },
          recipient: "",
          listed_book: {
            genre: "Math",
            title: "Fundamentals of Calculus",
            author: "Pearson",
            ISBN: "978-2-45-123345-1",
            desc: ""
          },
          price: "50.00",
        }],
      },
      {
        auctions: [],
      }]
    }
  }

  try {
    const response = await fetch(
      '/bookmate/v1/get-listings', {
        credentials: 'include',
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token
        }
      }
    )

    const data = await response.json()
    return data
  } catch (err) {
    return err
  }
}

export const list_book_for_purchase = async (isbn, author, title, genre, desc, price) => {
  try {
    fetch(
      '/bookmate/v1/list-book-for-purchase', {
        credentials: 'include',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token
        },
        body: {
          isbn: isbn,
          author: author,
          title: title,
          genre: genre,
          desc: desc,
          price: price
        }
      }
    )
  } catch(err) {
    return err
  }
}

export const list_book_for_trade = async (isbn, author, title, genre, desc) => {
  try {
    fetch(
      '/bookmate/v1/list-book-for-trade', {
        credentials: 'include',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token
        },
        body: {
          isbn: isbn,
          author: author,
          title: title,
          genre: genre,
          desc: desc
        }
      }
    )
  } catch(err) {
    return err
  }
}

export const list_book_for_auction = async (isbn, author, title, genre, desc, auction_end_date) => {
  try {
    fetch(
      '/bookmate/v1/list-book-for-auction', {
        credentials: 'include',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token
        },
        body: {
          isbn: isbn,
          author: author,
          title: title,
          genre: genre,
          desc: desc,
          auction_end_date: auction_end_date
        }
      }
    )
  } catch(err) {
    return err
  }
}

export const register = async (email, password, first_name, last_name) => {
  try {
    const response = await fetch(
      '/bookmate/v1/register', {
        credentials: 'include',
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: {
          email: email,
          password: password,
          first_name: first_name,
          last_name: last_name
        }
      }
    )
    const data = response.ok
    return data
  } catch(err) {
    return err
  }
}

export const remove_auction = async (auction_id) => {
  try {
    const response = await fetch(
      '/bookmate/v1/remove-auction', {
        credentials: 'include',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token
        },
        body: {
          auction_id: auction_id
        }
      }
    )
    const data = response.ok
    return data
  } catch(err) {
    return err
  }
}

export const remove_purchase = async (purchase_id) => {
  try {
    const response = await fetch(
      '/bookmate/v1/remove-purchase', {
        credentials: 'include',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token
        },
        body: {
          purchase_id: purchase_id
        }
      }
    )
    const data = response.ok
    return data
  } catch(err) {
    return err
  }
}

export const remove_trade = async (trade_id) => {
  try {
    const response = await fetch(
      '/bookmate/v1/remove-trade', {
        credentials: 'include',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token
        },
        body: {
          trade_id: trade_id
        }
      }
    )
    const data = response.ok
    return data
  } catch(err) {
    return err
  }
}

export const make_bid = async (auction_id, amount) => {
  try {
    const response = await fetch(
      '/bookmate/v1/make-bid', {
        credentials: 'include',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token
        },
        body: {
          auction_id: auction_id,
          amount: amount
        }
      }
    )  
    const data = response.ok
    return data
  } catch(err) {
    return err
  }
}

export const login = async (email) => {
  try {
    const response = await fetch(
      '/bookmate/v1/login', {
        credentials: 'include',
        method: 'GET',
        headers: {
          Accept: 'application/json'
        },
        body: {
          email: email
        }
      }
    )
    const data = await response.json()
    let token = data.token
    localStorage.setItem("my-token", token)

    return data.password
  } catch(err) {
    return err
  }
}
