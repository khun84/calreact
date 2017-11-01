class RenameAppointmentTimeColumn < ActiveRecord::Migration[5.1]
  def up
    rename_column :appointments, :appointment_time, :appt_time
  end

  def down
    rename_column :appointments, :appt_time, :appointment_time
  end
end
