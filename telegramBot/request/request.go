package request

import "github.com/parnurzeal/gorequest"

func Post(url string, data string) (gorequest.Response, string, []error) {
	request := gorequest.New()
	resp, body, errs := request.Post(url).
		Send(data).
		End()

	return resp, body, errs
}