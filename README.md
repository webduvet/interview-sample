# Sampe test app

## What it does?

### Fetching data from API
loads data from given resource - only 3 items, no pagination is supported so all results(3) in one table

### Error message directive
displays error message on request - for 5 seconds.
it is a simple watcher on parent scope property.

### Search functionlity
simple directive which retrieves user input and calls search api

#### cache is required
I thought to create special cache service, but then realized that it will be way more efficient
just using the angular's default cache on $http service.

### any queries?
please email `andrej.bartko@gmail.com`
or call `085-8101638`

