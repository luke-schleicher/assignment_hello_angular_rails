require 'rails_helper'

RSpec.describe MessagesController, type: :controller do

  describe 'Messages' do

    let (:message) { create(:message)}
    let(:json) { JSON.parse(response.body) }

    describe 'GET #index' do


      before do
        get :index, format: :json
      end

      it 'should respond with a success' do
        expect( response.status).to eq(200)
      end

      it 'returns an array' do
        expect(json).to be_a Array
      end

      it 'returns an object with the message' do
        expect(json[0]["message"]).to eq("Hello Angular World!")
      end

    end

  end

end