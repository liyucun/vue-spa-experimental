package main

import (
	"encoding/json"
	"net/http"
	"time"
)

type Product struct {
	Id        int     `json:"id"`
	Title     string  `json:"title"`
	Price     float64 `json:"price"`
	Inventory int     `json:"inventory"`
}

type Products []Product

func handler(w http.ResponseWriter, r *http.Request) {
	expiration := time.Now().Add(365 * 24 * time.Hour)
	cookie := http.Cookie{Name: "username", Value: "astaxie", Expires: expiration}
	http.SetCookie(w, &cookie)

  w.Header().Set("Access-Control-Allow-Origin", "http://localhost:8080")
  w.Header().Set("Access-Control-Allow-Credentials", "true")

	products := Products{
		Product{1, "iPad 4 Mini", 500.01, 2},
		Product{2, "H&M T-Shirt White", 10.99, 10},
		Product{3, "Charli XCX - Sucker CD", 19.99, 5},
	}

	js, err := json.Marshal(products)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Write(js)
}

func main() {
	http.HandleFunc("/", handler)
	http.ListenAndServe(":5000", nil)
}
