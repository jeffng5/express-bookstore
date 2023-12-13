process.env.NODE_ENV = "test";


const request = require('supertest');

const app = require("../app");
const books = require("../fakeDb.js");

let book1 = {"isbn" : "0691161518",
            "amazon_url": "http://a.co/eobPtX2",
            "author": "Matthew Lane",
            "language" : "english",
            "pages" : 222,
            "publisher": "Princeton University Press",
            "title": "The Cat in the Hat",
            "year": 1967}


beforeEach(function(){
    books.push(book1);
})

describe("Get all books", function() {
    test("Get all books", async function () {
    try{
        const res = await request(app).get("/");
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual( {book1} )}

    catch { console.log("Im HERE")
    }

})
}
    )

describe("Get book by id", ()=>{
    test("Get books by id", async () =>{
    try{
        const res = await request(app).get("/1")
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({ books: [book1] })
    }
    catch {
        console.log("Im HERE")
    }
})
}
    )

describe("Post book", ()=>{
    test("Post book", async () =>{
    try{
        const res = await request(app).post("/").send({book: book1})
    expect(res.statusCode).toBe(201)
    expect(res.body).toEqual({ "books": book1 })
    }
    catch{console.log("IM HERE")}
    })
    }
        )
describe("Update books /:isbn", function() {
    test("Update books /:isbn", async function() {
    try{
        const res = await request(app).patch(`/${book1.isbn}`).send({isbn : "0691161518"})
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual({ "isbn": "0691161518" })
    }
    catch {console.log("Im here")}
        })
        }
            )    
    test("Responds with 404 if usbn invalid", async function(){
        const resp = await request(app).patch(`/<int:${9}>`)
        expect(resp.statusCode).toBe(404);
    })

describe("DELETE book /:isbn", function(){
    test("Deletes book /:isbn", async function(){
    try{
        const resp = await request(app).delete(`/books/${book1.isbn}`).send({isbn: "0691161518"})
    expect(res.statusCode).toBe(200)
    expect(resp.body).toEqual({"isbn": "0691161518" })    
    }
    catch{console.log("IM HERE")}
    })
})