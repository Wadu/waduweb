class AddDirectionToEvents < ActiveRecord::Migration
  def change
    add_column :events, :direction, :string
    add_column :events, :lat, :double
    add_column :events, :long, :double
  end
end
