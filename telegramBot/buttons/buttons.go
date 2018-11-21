package buttons

import (
	tb "gopkg.in/tucnak/telebot.v2"
)

var (
	CreateButton = tb.ReplyButton{Text: "Create account"}
	ExchangeButton = tb.ReplyButton{Text: "Exchange"}
	Keyboard = [][]tb.ReplyButton{
	[]tb.ReplyButton{CreateButton},
	[]tb.ReplyButton{ExchangeButton},
	}

	EthFromButton = tb.InlineButton{Unique: "eth", Text: "ETH"}
	OmgFromButton = tb.InlineButton{Unique: "omg", Text: "OMG"}
	KncFromButton = tb.InlineButton{Unique: "knc", Text: "KNC"}
	SaltFromButton = tb.InlineButton{Unique: "salt", Text: "SALT"}
	ZilFromButton = tb.InlineButton{Unique: "zil", Text: "ZIL"}

	EthToButton = tb.InlineButton{Unique: "eth1", Text: "ETH"}
	OmgToButton = tb.InlineButton{Unique: "omg1", Text: "OMG"}
	KncToButton = tb.InlineButton{Unique: "knc1", Text: "KNC"}
	SaltToButton = tb.InlineButton{Unique: "salt1", Text: "SALT"}
	ZilToButton = tb.InlineButton{Unique: "zil1", Text: "ZIL"}

	FromKeys = [][]tb.InlineButton{
	[]tb.InlineButton{EthFromButton},
	[]tb.InlineButton{OmgFromButton},
	[]tb.InlineButton{KncFromButton},
	[]tb.InlineButton{SaltFromButton},
	[]tb.InlineButton{ZilFromButton},
	}

	ToKeys = [][]tb.InlineButton{
	[]tb.InlineButton{EthToButton},
	[]tb.InlineButton{OmgToButton},
	[]tb.InlineButton{KncToButton},
	[]tb.InlineButton{SaltToButton},
	[]tb.InlineButton{ZilToButton},
	}
)