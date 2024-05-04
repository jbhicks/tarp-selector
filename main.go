package main

import (
	"fmt"
	"net/http"

	"github.com/a-h/templ"
	"github.com/jbhicks/tarp-selector/components" // Import the package that contains the tarpSelector function
)

func main() {
	// start
	component := components.TarpSelector("tarpSelector")
	http.Handle("/", templ.Handler(component))

	fmt.Println("Listening on :8080")
	http.ListenAndServe(":8080", nil)
}