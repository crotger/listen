package peerhandler

import (
	"math/rand"
)

func name() string {
	return []string{
		"carlos",
		"scott",
		"asdf",
		"my name",
		"nobody",
	}[rand.Uint32()]
}
