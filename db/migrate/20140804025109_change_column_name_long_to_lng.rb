class ChangeColumnNameLongToLng < ActiveRecord::Migration
  def self.up
    rename_column :events, :long, :lng
  end

  def self.down
    rename_column :events, :lng, :long
  end
end
