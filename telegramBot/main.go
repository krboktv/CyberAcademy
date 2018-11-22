package main

import (
	"./handlers"
	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/contrib/cors"
)


func main()  {
	r := gin.Default()
	r.Use(cors.Default())
	r.POST("/create/:userID", handlers.CreateUser)

	r.GET("/exchange/:userID", handlers.GetTx)
	r.POST("/exchange/:userID", handlers.SendTxHash)

	r.Run(":8080")
}