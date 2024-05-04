package main

import (
	"fmt"
	"net/http"

	"github.com/a-h/templ"
	"github.com/jbhicks/tarp-selector/components"
)

func main() {
	// start
	component := components.TarpSelector("tarpSelector")

	// Serve static files from the public directory
	http.Handle("/public/", http.StripPrefix("/public/", http.FileServer(http.Dir("public"))))

	http.Handle("/", templ.Handler(component))
	
	fmt.Println("Listening on :8080")
	http.ListenAndServe(":8080", nil)
}