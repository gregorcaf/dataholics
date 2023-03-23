import json


def load_data(db_file):
    with open(db_file, "r") as f:
        data = json.load(f)

    generate_all_endpoint_data(data)
    return data


def generate_all_endpoint_data(data):
    for user_name in data:
        for month_data in data[user_name]:
            # here we work with a user per month summary
            all_end_locations = []
            for trip in data[user_name][month_data]["raw"]:
                # per each trip in a month
                all_end_locations.append(trip["end_location"])

            data[user_name][month_data]["features"]["all_end_locations"] = all_end_locations


def get_all_end_locations(user_name, month, data):
    return data[user_name][month]["features"]["all_end_locations"]