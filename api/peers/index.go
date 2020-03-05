package peerhandler

import (
	"fmt"
	"net/http"
	"time"
)

func PeerHandler(w http.ResponseWriter, r *http.Request) {
	currentTime := time.Now().Format(time.RFC850)
	fmt.Fprintf(w, currentTime)
}
