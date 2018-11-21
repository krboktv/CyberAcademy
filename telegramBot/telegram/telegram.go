package telegram

import (
	"../request"
	"encoding/json"
	"os"
)

func SendMessage(userID string, msg string)  {
	TOKEN := os.Getenv("TOKEN")
	url := "https://api.telegram.org/bot" + TOKEN + "/sendMessage"

	m := map[string]interface{}{
		"chat_id": userID,
		"text": msg,
		"parse_mode": "Markdown",
	}

	mJson, _ := json.Marshal(m)
	mString := string(mJson[:])

	request.Post(url, mString)
}