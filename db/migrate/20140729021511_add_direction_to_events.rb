class AddDirectionToEvents < ActiveRecord::Migration
  def change
    add_column :events, :direction, :string
    add_column :events, :lat, :float
    add_column :events, :long, :float
  end
end
