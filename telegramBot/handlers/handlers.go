package handlers

import (
	"../db"
	"../telegram"
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

type Tx struct {
	txHash string `json:"txHash"`
}

type User struct {
	address string `json:"address"`
}

type SendingObject struct {
	CurrencyFrom string `json:"currencyFrom"`
	CurrencyTo string 	`json:"currencyTo"`
	AmountTo string 	`json:"amountTo"`
}

func GetTx(c *gin.Context)  {
	result, err := db.Tx("database").Get([]byte(c.Param("userID")))
	fmt.Print(result)
	obj := SendingObject{}
	if err := json.Unmarshal(result, &obj); err != nil {
		panic(err)
	}
	if err == nil {
		c.JSON(http.StatusOK, gin.H{"error": nil, "result": obj})
	} else {
		c.JSON(http.StatusBadRequest, gin.H{"error": err, "result": nil})
	}
}

func SendTxHash(c *gin.Context) {
	var transaction Tx
	if c.ShouldBind(&transaction) == nil {
		fmt.Print(transaction)
		telegram.SendMessage(c.Param("userID"), transaction.txHash)
		c.JSON(http.StatusOK, gin.H{"error": nil, "result": "success"})
	}
}

func CreateUser(c *gin.Context)  {
	var user User
	if c.ShouldBind(&user) == nil {
		err := db.User("database").Put([]byte(c.Param("userID")), []byte(user.address))
		if err == nil {
			c.JSON(http.StatusOK, gin.H{"error": nil, "result": "success"})
		} else {
			c.JSON(http.StatusBadRequest, gin.H{"error": err, "result": nil})
		}
	}
}