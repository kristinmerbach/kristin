require 'net/https'
require 'cgi'
require 'json'
require 'sinatra'

helpers do
  def get_issues(page=1, label=nil)
  	base_uri = "https://api.github.com/repos/rails/rails/issues?status=open&per_page=50&page=#{page}"
  	if label != nil
  		base_uri += "&labels=#{label}"
  	end
    issues_uri = 	URI(base_uri)
  	issues_request = Net::HTTP.get(issues_uri)
  	JSON(issues_request)
  end
end

get '/' do
  @issues = get_issues
  @next_page = "2"
  erb :index
end

get '/labels/:label' do |l|
	@issues = get_issues(1, l)
  @next_page = "2"
  erb :index

end

get '/pages/:number' do |n|
	get_issues(n.to_1)
  @page = (n.to_i + 1).to_s
  erb :index
end
