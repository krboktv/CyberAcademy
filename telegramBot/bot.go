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
		h.From(b, c, buttons.KncFromButton.Text)
	})
	b.Handle(&buttons.EthFromButton, func(c *tb.Callback) {
		h.From(b, c, buttons.EthFromButton.Text)
	})
	b.Handle(&buttons.OmgFromButton, func(c *tb.Callback) {
		h.From(b, c, buttons.OmgFromButton.Text)
	})
	b.Handle(&buttons.SaltFromButton, func(c *tb.Callback) {
		h.From(b, c, buttons.SaltFromButton.Text)
	})
	b.Handle(&buttons.ZilFromButton, func(c *tb.Callback) {
		h.From(b, c, buttons.ZilToButton.Text)
	})

	b.Handle(&buttons.KncToButton, func(c *tb.Callback) {
		h.To(b, c, buttons.KncToButton.Text)
	})
	b.Handle(&buttons.EthToButton, func(c *tb.Callback) {
		h.To(b, c, buttons.EthToButton.Text)
	})
	b.Handle(&buttons.OmgToButton, func(c *tb.Callback) {
		h.To(b, c, buttons.OmgToButton.Text)
	})
	b.Handle(&buttons.SaltToButton, func(c *tb.Callback) {
		h.To(b, c, buttons.SaltToButton.Text)
	})
	b.Handle(&buttons.ZilToButton, func(c *tb.Callback) {
		h.To(b, c, buttons.ZilToButton.Text)
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

	b.Handle("/amount", func(m *tb.Message) {
		h.SendLink(b, m)
	})

	b.Start()
}