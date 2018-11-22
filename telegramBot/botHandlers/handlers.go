package botHandlers

import (
	"../buttons"
	"../db"
	"encoding/json"
	"fmt"
	tb "gopkg.in/tucnak/telebot.v2"
	"os"
	"strconv"
)

type SendingObject struct {
	CurrencyFrom string `json:"currencyFrom"`
	CurrencyTo string 	`json:"currencyTo"`
	AmountTo string 	`json:"amountTo"`
}

func From(b *tb.Bot, c *tb.Callback, currency string)  {
	fmt.Print(c.Data)
	db.TxFrom("database").Put([]byte(strconv.Itoa(c.Sender.ID)), []byte(currency))
	b.Send(c.Sender, "To", &tb.ReplyMarkup{
		InlineKeyboard:  buttons.ToKeys,
	})
	b.Respond(c, &tb.CallbackResponse{})
}

func To(b *tb.Bot, c *tb.Callback, currency string)  {
		db.TxTo("database").Put([]byte(strconv.Itoa(c.Sender.ID)), []byte(currency))
		b.Send(c.Sender, "Enter amount")
		b.Respond(c, &tb.CallbackResponse{

		})
}

func SendLink(b *tb.Bot, m *tb.Message)  {
	var backendUrl = os.Getenv("URL")

	from, _ := db.TxFrom("database").Get([]byte(strconv.Itoa(m.Sender.ID)))
	to , _ := db.TxTo("database").Get([]byte(strconv.Itoa(m.Sender.ID)))
	amount := m.Text[8:]


	sendObj := &SendingObject{
		CurrencyFrom: string(from),
		CurrencyTo: string(to),
		AmountTo: string(amount),
	}

	jsonObj, _ := json.Marshal(sendObj)

	db.Tx("database").Put([]byte(strconv.Itoa(m.Sender.ID)), jsonObj)
	buttons.SetLinkButton(backendUrl + "/exchange/?tx=" + strconv.Itoa(m.Sender.ID))
	fmt.Print(buttons.ExchangeInlineKeyboard)
	b.Send(m.Sender, "Click me", &tb.ReplyMarkup{
		InlineKeyboard:  buttons.ExchangeInlineKeyboard,
	})
}