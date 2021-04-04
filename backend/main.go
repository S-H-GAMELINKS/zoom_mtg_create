package main

import (
	"fmt"
	"os"
	"github.com/joho/godotenv"
	"github.com/himalayan-institute/zoom-lib-golang"
	"github.com/gin-gonic/gin"
)

func main() {
	err := godotenv.Load()
	if err != nil {
	  fmt.Println("Error loading .env file")
	}

	var (
		apiKey    = os.Getenv("ZOOM_API_KEY")
		apiSecret = os.Getenv("ZOOM_API_SECRET")
		userID	  = os.Getenv("USER_ID")
	)

	zoom.APIKey = apiKey
	zoom.APISecret = apiSecret

	r := gin.Default()

	r.POST("/zoom/mtg", func(c *gin.Context) {
		var createMeetingOpts zoom.CreateMeetingOptions
		createMeetingOpts.HostID = userID
		meeting, err := zoom.CreateMeeting(createMeetingOpts)
		if err != nil {
			fmt.Println("can not create meeting!")
		}
		c.JSON(200, gin.H{
			"message": "reserved",
			"zoom_mtg_url": meeting.JoinURL,
		})
	})
	r.Run()
}