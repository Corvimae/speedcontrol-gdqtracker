# speedcontrol-gdqtracker

This bundle is a helper bundle that gets the donation total from instances of the [GDQ Donation Tracker](https://github.com/GamesDoneQuick/donation-tracker). 


### Configuration

```
{
	"enable": true,
	"eventUrl": "EVENT_URL",
	"pollRate": 30000
}
```

The event URL should have the format `https://[domain]/tracker/event/[slug]` (without the brackets, of course).

Poll rate is in milliseconds. By default, it is 15 seconds.