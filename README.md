# speedcontrol-tiltify

This bundle is a helper bundle that gets the donation total from campaigns on [Tiltify](https://tiltify.com/). It was originally code for [nodecg-speedcontrol](https://github.com/speedcontrol/nodecg-speedcontrol) and is intended to work alongside it, but does not depend on it so could be used for other purposes. Currently undocumented and is subject to change.

### Confg

```
"tiltify": {
	"enable": true,
	"token": "API_ACCESS_TOKEN",
	"campaign": "CAMPAIGN_ID"
}
```

Once enabled and an API access token and campaign ID are specified from Tiltify (you can get a token by registering an application on the Tiltify dashboard, the campaign ID is harder to find; look in your browser's inpector in the Network tab), the donation total for your campaign will be stored and frequently updated in the `tiltifyDonationTotal` replicant of this bundle.