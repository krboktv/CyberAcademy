package main

import (
	"./handlers"
	"github.com/gin-gonic/gin"
)


func main()  {
	r := gin.Default()
	r.Use()
	r.POST("/create/:userID", handlers.CreateUser)

	r.GET("/exchange/:userID", handlers.GetTx)
	r.POST("/exchange/:userID", handlers.SendTxHash)

	r.Run(":8080")
}