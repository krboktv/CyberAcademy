package main

import (
	h "./botHandlers"
	"./buttons"
	tb "gopkg.in/tucnak/telebot.v2"
	"log"
	"os"
	"time"
)

func main()  {

	
	b, err := tb.NewBot(tb.Settings{
		Token:  os.Getenv("TOKEN"),
		Poller: &tb.LongPoller{Timeout: 10 * time.Second},
	})


	b.Handle(&buttons.KncFromButton, func(c *tb.Callback) {
		h.From(b, c)
	})
	b.Handle(&buttons.EthFromButton, func(c *tb.Callback) {
		h.From(b, c)
	})
	b.Handle(&buttons.OmgFromButton, func(c *tb.Callback) {
		h.From(b, c)
	})
	b.Handle(&buttons.SaltFromButton, func(c *tb.Callback) {
		h.From(b, c)
	})
	b.Handle(&buttons.ZilFromButton, func(c *tb.Callback) {
		h.From(b, c)
	})

	b.Handle(&buttons.KncToButton, func(c *tb.Callback) {
		h.To(b, c)
	})
	b.Handle(&buttons.EthToButton, func(c *tb.Callback) {
		h.To(b, c)
	})
	b.Handle(&buttons.OmgToButton, func(c *tb.Callback) {
		h.To(b, c)
	})
	b.Handle(&buttons.SaltToButton, func(c *tb.Callback) {
		h.To(b, c)
	})
	b.Handle(&buttons.ZilToButton, func(c *tb.Callback) {
		h.To(b, c)
	})

	if err != nil {
		log.Fatal(err)
		return
	}

	b.Handle("/start", func(m *tb.Message) {
		b.Send(m.Sender, "Hi!", &tb.ReplyMarkup{
			ReplyKeyboard:  buttons.Keyboard,
		})
	})

	b.Handle(&buttons.CreateButton, func(m *tb.Message) {
		b.Send(m.Sender, "Create")
	})

	b.Handle(&buttons.ExchangeButton, func(m *tb.Message) {
		b.Send(m.Sender, "Exchange", &tb.ReplyMarkup{
			InlineKeyboard:  buttons.FromKeys,
		})
	})

	b.Start()
}