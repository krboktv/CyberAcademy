package botHandlers

import (
	"strconv"
	tb "gopkg.in/tucnak/telebot.v2"
	"../db"
	"../buttons"
)

func From(b *tb.Bot, c *tb.Callback)  {
	db.TxFrom("database").Put([]byte(strconv.Itoa(c.Sender.ID)), []byte(c.Message.Text))
	b.Send(c.Sender, "To", &tb.ReplyMarkup{
		InlineKeyboard:  buttons.ToKeys,
	})
	b.Respond(c)
}

func To(b *tb.Bot, c *tb.Callback)  {
		db.TxFrom("database").Put([]byte(strconv.Itoa(c.Sender.ID)), []byte(c.Message.Text))
		b.Send(c.Sender, "Enter amount")
		b.Respond(c)
}

func Amount()  {
	
}

func SendLink()  {

}