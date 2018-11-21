package handlers

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"../db"
	"../telegram"
)

type Tx struct {
	txHash string `json:"txHash"`
}

type User struct {
	address string `json:"address"`
}

func GetTx(c *gin.Context)  {
	result, err := db.Tx("database").Get([]byte(c.Param("userID")))
	if err == nil {
		c.JSON(http.StatusOK, gin.H{"error": nil, "result": result})
	} else {
		c.JSON(http.StatusBadRequest, gin.H{"error": err, "result": nil})
	}
}

func SendTxHash(c *gin.Context) {
	var transaction Tx
	if c.ShouldBind(&transaction) == nil {
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